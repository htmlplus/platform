import React from 'react';
import * as glob from 'glob';
import * as Utils from '@app/utils';
import { Box, Code, Page, PlusGrid, PlusGridItem, PlusTransition, Text, TocItem } from '@app/components';
import '@htmlplus/react/dist/externals/transition/all.css';

const Names = (props) => {

    const { data } = props;

    const categories = data || [];

    return (
        <Page layout="default">
            {/* <Text size="2">
                <TocItem>Overview</TocItem>
            </Text>
            <Text size="body">
                TODO
            </Text>
            <Box py={4} /> */}
            <Text size="2">
                <TocItem>Usage</TocItem>
            </Text>
            <Text size="body">
                If you need a transition from a category
            </Text>
            <Code language="css">
                {[
                    "/* Template */",
                    "@import '@htmlplus/core/dist/externals/transition/[category]/[name].css';",
                    "",
                    "/* For example */",
                    "@import '@htmlplus/core/dist/externals/transition/flippers/flip.css';"
                ].join('\n')}
            </Code>
            <Text size="body">
                If you need a category
            </Text>
            <Code language="css">
                {[
                    "/* Template */",
                    "@import '@htmlplus/core/dist/externals/transition/[category]/all.css';",
                    "",
                    "/* For example */",
                    "@import '@htmlplus/core/dist/externals/transition/fading-entrance/all.css';"
                ].join('\n')}
            </Code>
            <Text size="body">
                If you need all categories
            </Text>
            <Code language="css">
                @import '@htmlplus/core/dist/externals/transition/all.css';
            </Code>
            <Box py={4} />
            <Text size="2">
                <TocItem>Categories</TocItem>
            </Text>
            {/* <Text size="body">
                TODO
            </Text> */}
            <Box py={4} />
            {categories.map((category) => (
                <React.Fragment key={category.key}>
                    <Text size="3">
                        <TocItem>{category.title}</TocItem>
                    </Text>
                    {/* TODO */}
                    <Box py={2} />
                    <PlusGrid gutter="md">
                        {category.values.map((value) => (
                            <PlusGridItem className="transition" key={`${category.key}:${value.key}`}>
                                <Box width="130px" mb={3}>
                                    <div className="content">
                                        <PlusTransition className="element" name={value.key} repeat="infinite" />
                                    </div>
                                    <Text size="caption" align="center">
                                        {value.title}
                                    </Text>
                                </Box>
                            </PlusGridItem>
                        ))}
                    </PlusGrid>
                    <Box py={4} />
                </React.Fragment>
            ))}
        </Page>
    )
}

export const getServerSideProps = async (context) => {

    const values = [];

    const dir = 'node_modules/@htmlplus/react/dist/externals/transition';

    glob.sync('**/*.*', { cwd: dir })
        .filter((file) => !file.endsWith('all.css'))
        .forEach((file) => {

            const keys = file.split('/').filter((section) => !!section);

            let current = { values };

            for (let i = 0; i < keys.length; i++) {

                const key = keys[i].replace('.css', '');

                let value = (current.values || []).find((value) => value.key === key);

                if (!value) {

                    current.values = current.values || [];

                    const title = key.split('-')
                        .map((section) => Utils.toCapitalCase(section))
                        .join(' ');

                    value = { key, title };

                    current.values.push(value);
                }

                current = value;
            }
        });

    return {
        props: {
            data: values.filter((value) => value.key !== 'typing')
        }
    }
}

export default Names;