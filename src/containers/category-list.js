import React, { useEffect } from 'react';
import {
    FlatList,
} from 'react-native';

import Empty from '../components/empty';
import Separator from '../components/horizontal-separator';
import Layout from '../components/category-list-layout';
import Category from '../components/category';
import { connect } from 'react-redux';
import { requestSuggestions } from '../redux/actions/movies_state.action';

const CategoryList = ({list, requestSuggestions}) => {

    useEffect(() => {
        requestSuggestions(10);
    }, [])

    const keyExtractor = item => item.id.toString();
    const renderEmpty = () => <Empty text="No hay elementos en la lista :'("/>
    const itemSeparator = () => <Separator/>
    const renderItem = ({ item }) => <Category {...item}/>

    return (
        <Layout title="Categorias">
            <FlatList
                horizontal
                keyExtractor={keyExtractor}
                data={list}
                ListEmptyComponent={renderEmpty}
                ItemSeparatorComponent={itemSeparator}
                renderItem={renderItem}/>
        </Layout>
    );
}

const mapStateToProps = ({movies}) => {
    return ({
        list: movies.suggestions
    })
}

const mapDispatchToProps = {
    requestSuggestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);