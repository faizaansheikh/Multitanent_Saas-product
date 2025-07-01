'use client'
import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Header from './Header';
import { usePathname, useRouter } from 'next/navigation';
// import Highlighter from 'react-highlight-words';




const Wrapper = ({ children }: any) => {
    return (
        <span style={{ color: 'grey', fontWeight: 500, fontSize: '13px' }}>
            {children}
        </span>
    )
}
const Register = (props: any) => {
    const { column, data, title } = props
    const pathname = usePathname();
    const router = useRouter()
    
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const getColumnSearchProps = (dataIndex: any): TableColumnType<any> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        filterDropdownProps: {
            onOpenChange(open) {
                if (open) {
                    setTimeout(() => searchInput.current?.select(), 100);
                }
            },
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                // <Highlighter
                //   highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                //   searchWords={[searchText]}
                //   autoEscape
                //   textToHighlight={text ? text.toString() : ''}
                // />
                <></>
            ) : (
                text
            ),
    });

    const [columns, setColumns] = useState<any>([])
    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };




    useEffect(() => {
        if (column) {
            const availableKeys = Object.keys(data[0] || {});

            const columnDefs = column
                .filter((col: string) => availableKeys.includes(col.toLowerCase()))
                .map((col: string) => {
                    const key = col.toLowerCase();

                    return {
                        title: col,
                        dataIndex: key,
                        key: key,
                        width: col === 'Name' ? '30%' : col === 'Age' ? '20%' : undefined,
                        // ...getColumnSearchProps(key),
                        sorter: (a: any, b: any) => a.address.length - b.address.length,
                        sortDirections: ['descend', 'ascend'],
                        render: (text: any) => <Wrapper>{typeof text === 'object' ? JSON.stringify(text) : text}</Wrapper>,
                    };
                });

            setColumns(columnDefs);
        }
    }, [column]);

    let actions = [
        { label: 'Add', click: () => router.push(`${pathname}/new`) },
    ]
    return <>
        <Header actions={actions} title={title || ''}/>
        <Table<any> columns={columns || []} dataSource={data || []} />
    </>
};

export default Register;