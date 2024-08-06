import { Divider, Stack } from '@mui/material';
import List from '@mui/material/List';
import ChatListHeader from './chat-list-header/ChatListHeader';
import ChatListItem from './chat-list-item/ChatListItem';

const ChatList = () => {
  return (
    <Stack>
      <ChatListHeader />
      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: '90vh', overflow: 'auto' }}>
        <ChatListItem />
      </List>
    </Stack>
  );
};
export default ChatList;
