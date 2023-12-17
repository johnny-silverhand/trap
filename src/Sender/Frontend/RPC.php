<?php

declare(strict_types=1);

namespace Buggregator\Trap\Sender\Frontend;

use Buggregator\Trap\Handler\Router\Method;
use Buggregator\Trap\Handler\Router\Router;
use Buggregator\Trap\Logger;

/**
 * @internal
 */
final class RPC
{
    private readonly Router $router;

    public function __construct(
        private readonly Logger $logger,
        EventsStorage $eventsStorage,
    ) {
        $this->router = Router::new(new Service($logger, $eventsStorage));
    }

    /**
     * @param mixed $message Array is expected
     */
    public function handleMessage(mixed $message): ?Message\Rpc
    {
        try {
            if (!\is_array($message) || !\is_string($method = $message['method'] ?? null)) {
                return null;
            }

            return $this->callMethod($method);
        } catch (\Throwable $e) {
            $this->logger->exception($e);
            return null;
        }
    }

    private function callMethod(string $initMethod): ?Message\Rpc
    {
        [$method, $path] = \explode(':', $initMethod, 2) + [1 => ''];

        $route = $this->router->match(Method::fromString($method), $path);

        if ($route === null) {
            // todo: Error message?
            return null;
        }

        /** @var mixed $result */
        $result = $route();
        return $result === null ? null : new Message\Rpc(data: $result);
    }
}
