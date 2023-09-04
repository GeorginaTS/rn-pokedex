import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { render } from "@testing-library/react-native";
import { PokemonCard } from '../components/PokemonCard';
import React from 'react';

test('component SafeAreaView mounts properly', () => {
    const wrapper = render(<SafeAreaView />)
    expect(wrapper).toBeTruthy()
})
test('component FlatList mounts properly', () => {
    const wrapper = render(<FlatList  numColumns={2} />)
    expect(wrapper).toBeTruthy()
})

test('component PokemonCard 13 mounts properly', () => {
    const wrapper = render(<PokemonCard url='https://pokeapi.co/api/v2/pokemon-species/13/' />)
    expect(wrapper).toBeTruthy()
})
test('component TouchableOpacity mounts properly', () => {
    const wrapper = render(<TouchableOpacity/>)
    expect(wrapper).toBeTruthy()
})