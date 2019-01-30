import { FullContent } from 'modules/common/styles/main';
import { __ } from 'modules/common/utils';
import { Wrapper } from 'modules/layout/components';
import * as React from 'react';
import { Box, Group, MiddleContent, Row, Title } from '../styles';
import { ProjectVersions, Version } from '../types';

class Plans extends React.Component<{ versions: ProjectVersions }> {
  renderData(title: string) {
    return (
      <Row>
        <span>{title}</span>
        <div>haha</div>
      </Row>
    );
  }

  render() {
    const breadcrumb = [
      { title: __('Settings'), link: '/settings' },
      { title: __('System Plans') }
    ];

    const { versions } = this.props;

    const { erxesVersion } = versions;

    const content = (
      <FullContent center={true}>
        <MiddleContent>
          <Box>
            <Title>{__('Plan Details')}</Title>
            <Group>
              {this.renderData('Team size')}
              {this.renderData('Payment period')}
              {this.renderData('Payments')}
              {this.renderData('Next payment')}
            </Group>
          </Box>
        </MiddleContent>
      </FullContent>
    );

    return (
      <Wrapper
        header={<Wrapper.Header breadcrumb={breadcrumb} />}
        content={content}
        transparent={true}
      />
    );
  }
}

export default Plans;
