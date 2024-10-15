export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
export type { ProfileSchema } from './model/types/editableProfileCardSchema';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';

export { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export { profileActions } from './model/slice/profileSlice';
