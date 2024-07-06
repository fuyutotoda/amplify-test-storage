import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
//ストレージ名を決める
name: 'amplifyTeamDrive',

//アクセス認可を設定する - cognito.identity??
access: (allow) => ({
    'profile-pictures/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'picture-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  })

});