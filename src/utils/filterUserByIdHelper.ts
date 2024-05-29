export const filterUserByIdHelper= (allUsers: any[], id: string) => {
  return allUsers.find(item => item.id === id);
}