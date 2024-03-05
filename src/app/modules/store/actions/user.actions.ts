import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Login to the app': props<{ user: User }>(),
    'Logout to the app': emptyProps(),
  },
})
