import * as React from 'react';
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe( 'ProductTitle', () => {
    test('mostrar e lcompononte titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom product' className='custom-class' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    })

    test('componente con el nombre del producto ', () =>{

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    } )
})

