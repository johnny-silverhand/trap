<?php

declare(strict_types=1);

namespace Buggregator\Trap\Proto\Frame;

use Buggregator\Trap\Proto\Frame;
use Buggregator\Trap\ProtoType;
use DateTimeImmutable;

/**
 * @internal
 * @psalm-internal Buggregator
 */
final class SentryStore extends Frame
{
    /**
     * @param array{
     *     event_id: non-empty-string,
     *     timestamp: positive-int,
     *     platform: non-empty-string,
     *     sdk: array{
     *         name: non-empty-string,
     *         version: non-empty-string,
     *     },
     *     logger: non-empty-string,
     *     server_name: non-empty-string,
     *     transaction: non-empty-string,
     *     modules: array<non-empty-string, non-empty-string>,
     *     exception: array<array-key, array{
     *         type: non-empty-string,
     *         value: non-empty-string,
     *         stacktrace: array{
     *             frames: array<array-key, array{
     *                 filename: non-empty-string,
     *                 lineno: positive-int,
     *                 abs_path: non-empty-string,
     *                 context_line: non-empty-string,
     *             }
     *         }
     *     }>
     * } $message
     */
    public function __construct(
        public readonly array $message,
        DateTimeImmutable $time = new DateTimeImmutable(),
    ) {
        parent::__construct(ProtoType::Sentry, $time);
    }

    /**
     * @throws \JsonException
     */
    public function __toString(): string
    {
        return \json_encode($this->message, JSON_THROW_ON_ERROR);
    }

    public static function fromString(string $payload, DateTimeImmutable $time): Frame
    {
        return new self(
            \json_decode($payload, true, JSON_THROW_ON_ERROR),
            $time
        );
    }
}
