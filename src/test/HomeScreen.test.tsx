import {FlatList, SafeAreaView } from 'react-native';
import { render } from "@testing-library/react-native";
import { PokemonCard } from '../components/PokemonCard';

test('component SafeAreaView mounts properly', () => {
    const wrapper = render(<SafeAreaView />)
    expect(wrapper).toBeTruthy()
})
test('component FlatList  mounts properly', () => {
    const wrapper = render(<PokemonCard url='https://pokeapi.co/api/v2/pokemon-species/132/' />)
    expect(wrapper).toBeTruthy()
})