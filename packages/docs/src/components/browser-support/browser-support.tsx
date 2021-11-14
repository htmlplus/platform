import React from 'react';
import { Box, PlusGrid, PlusGridItem, Text } from '@app/components';
import { browsers } from '@app/data';
import * as Utils from '@app/utils';

export const BrowserSupport: React.FC = () => {

  const classes = Utils.classes(
    'browser-support'
  );

  return (
    <div className={classes}>
      <Text size="4" align="center">
        Full native support
      </Text>
      <Box py={4} />
      <PlusGrid gutterY="lg">
        {browsers.map((browser) => (
          <PlusGridItem xs="12" sm="grow" key={browser.key}>
            <Box textAlign="center" minWidth="100px">
              <img
                alt={browser.title}
                src={`/assets/browsers/${browser.logo}`}
              />
              <br />
              <Text size="body" inline>
                {browser.title} {browser.version}
              </Text>
            </Box>
          </PlusGridItem>
        ))}
      </PlusGrid>
    </div>
  )
};