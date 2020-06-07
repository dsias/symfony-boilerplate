<?php

declare(strict_types=1);

namespace App\Infrastructure\Controller\GraphQL\User;

use App\Application\User\CreateUser;
use App\Domain\Model\User;
use App\Domain\Throwable\Exists\UserWithEmailExists;
use App\Domain\Throwable\Invalid\InvalidUser;
use App\Domain\Throwable\NotFound\UserNotFoundByEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use TheCodingMachine\GraphQLite\Annotations\Mutation;
use TheCodingMachine\GraphQLite\Annotations\Right;

final class CreateUserController extends AbstractController
{
    private CreateUser $createUser;

    public function __construct(CreateUser $createUser)
    {
        $this->createUser = $createUser;
    }

    /**
     * @throws UserWithEmailExists
     * @throws InvalidUser
     * @throws UserNotFoundByEmail
     *
     * @Mutation
     * @Right("ROLE_ADMINISTRATOR")
     */
    public function createUser(
        string $firstName,
        string $lastName,
        string $email,
        string $locale,
        string $role
    ): User {
        return $this->createUser->create(
            $firstName,
            $lastName,
            $email,
            $locale,
            $role
        );
    }
}
