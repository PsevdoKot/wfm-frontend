import { Roles } from '../consts';
import { ValueOf } from './value-of';

export type Role = ValueOf<typeof Roles>;
