import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Prueba en <GifGridItem />', () => {
    const title = 'un titulo';
    const url='www.ellitoral.com'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    
    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrafo en el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    })

    test('la img debe tener la url y alt de los props ', () => {
        const img = wrapper.find('img');
        //console.log(img.prop('src'));
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    })
    
    test('div debe contener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        // expect( div.prop('className')).toContain('animate__fadeIn'); funciona
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
    
    
})

