'use client';

import { Button } from '@dreamy-ui/react';
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  PopoverArrow,
  PopoverTrigger,
} from '@dreamy-ui/react';

export function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="primary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Delete Post</PopoverHeader>
        <PopoverBody>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </PopoverBody>
        <PopoverFooter>
          <Button variant={'primary'}>Delete</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
