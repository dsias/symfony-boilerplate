<?php

declare(strict_types=1);

namespace App\Domain\Throwable\Invalid;

use Symfony\Component\Validator\ConstraintViolationListInterface;

final class InvalidUsersFilters extends Invalid
{
    /**
     * @param ConstraintViolationListInterface<mixed> $constraintViolationList
     *
     * @throws InvalidUsersFilters
     */
    public static function throwException(ConstraintViolationListInterface $constraintViolationList): void
    {
        if ($constraintViolationList->count() > 0) {
            throw new self($constraintViolationList);
        }
    }
}
