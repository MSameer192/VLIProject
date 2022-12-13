import React from 'react'
import './CategoryGLicense.css'
import IntroPart from './1.IntroPart/IntroPart'
import ClassG1Licensing from './2.ClassG1Licensing/ClassG1Licensing'
import Stats from './3.Stats/Stats';
import ClassG2Licensing from './4.ClassG2Licensing/ClassG2Licensing'
import ClassGLicensing from './5.ClassGLicensing/ClassGLicensing'
import Footer from '../../Components/Footer/Footer'
const CategoryGLicense = () => {
    return (
        <div className='mt-20 overflow-hidden'>
            <IntroPart />
            <ClassG1Licensing />
            <Stats />
            <ClassG2Licensing />
            <ClassGLicensing />
            <Footer />
        </div>
    )
}

export default CategoryGLicense
