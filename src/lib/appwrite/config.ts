  import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

  export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
  };

  export const client = new Client();

  //57.45
  client.setProject(appwriteConfig.projectId);
  client.setEndpoint(appwriteConfig.url);


  export const account = new Account(client);
  export const databases = new Databases(client);
  export const storage = new Storage(client);
  export const avatars = new Avatars(client);

/* appwrite config[基础]
  import { Client,Account,Databases,Storage,Avatars } from 'appwrite';

  export const appwriteConfig = { 
    projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url:import.meta.env.VITE_APPWRITE_URL,
  };

  export const client = new Client();

  //57.45
  client.setProject(appwriteConfig.projectId);
  client.setEndpoint(appwriteConfig.url);


  export const account = new Account(client);
  export const databases = new Databases(client);
  export const storage = new Storage(client);
  export const avatars = new Avatars(client);
*/