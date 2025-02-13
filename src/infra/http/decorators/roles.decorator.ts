import { SetMetadata } from '@nestjs/common';

type PossibleRoles = 'admin' | 'professor' | 'student';

export const Roles = (...roles: PossibleRoles[]) => SetMetadata('roles', roles);
