import { makeVar } from '@apollo/client';
import { SnackMesage } from '../interfaces/snack-message.interface';

export const snackVar = makeVar<SnackMesage | undefined>(undefined);
