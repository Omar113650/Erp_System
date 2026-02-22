import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: string[]) => SetMetadata('role', args);






// export const Roles = (...args: string[]) => SetMetadata('roles', args);






