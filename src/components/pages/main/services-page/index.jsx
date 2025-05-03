import React from 'react'
import './../../../../assets/css/services-page.css'
import RedRouteBtn from './../../../global/RedRouteBtn'
import SwiperCarousel from "./../../../global/SwiperCarousel"

import FirstCont from './../../../../assets/images/content/services-cont-1.jpg'

// Partner's Logo
import BfgV1 from './../../../../assets/images/ico/bfg-v1.png'
import Apollo from './../../../../assets/images/ico/apollo.png'
import CooperTires from './../../../../assets/images/ico/coopertires.png'
import TriAce from './../../../../assets/images/ico/tri-ace-v1.png'
import VenomPower from './../../../../assets/images/ico/venom-power.png'
import Maxxis from './../../../../assets/images/ico/maxxis.png'
import Patriot from './../../../../assets/images/ico/patriot.png'
import Michelin from './../../../../assets/images/ico/michelin.png'
import Arivo from './../../../../assets/images/ico/arivo.png'
import Fuel from './../../../../assets/images/ico/fuel-v2.png'
import Profender from './../../../../assets/images/ico/profender.png'
import Tjm from './../../../../assets/images/ico/tjm.png'
import Dobinson from './../../../../assets/images/ico/dobinson.png'
import KingOffRoad from './../../../../assets/images/ico/king-offroad.png'
import OldManEmu from './../../../../assets/images/ico/old-man-emu.png'
import Ohlins from './../../../../assets/images/ico/ohlins.png'
import KingSprings from './../../../../assets/images/ico/king-springs-v2.png'
import Teraflex from './../../../../assets/images/ico/teraflex.png'
import SuperPro from './../../../../assets/images/ico/superpro.png'
import BodyArmor from './../../../../assets/images/ico/body-armor.png'
import ComeUpWinch from './../../../../assets/images/ico/come-up-winch.png'
import Factor from './../../../../assets/images/ico/factor-55.png'
import Warn from './../../../../assets/images/ico/warn.png'
import Recaro from './../../../../assets/images/ico/recaro.png'
import Whelen from './../../../../assets/images/ico/whelen-4x.png'
import Saber from './../../../../assets/images/ico/saber-4x.png'
import WaterPort from './../../../../assets/images/ico/waterport.png'
import SmartCap from './../../../../assets/images/ico/smartcap.png'
import FrontRunner from './../../../../assets/images/ico/front-runner.png'
import Arb from './../../../../assets/images/ico/arb.png'
import RoughCountry from './../../../../assets/images/ico/rough-country.png'
import Hamer from './../../../../assets/images/ico/hamer-v1.png'
import NikomOpen from './../../../../assets/images/ico/nikom-open.png'
import Option from './../../../../assets/images/ico/option.png'
import Mcc from './../../../../assets/images/ico/mcc.png'
import Borla from './../../../../assets/images/ico/borla.png'
import Radius from './../../../../assets/images/ico/radius.png'
import Greddy from './../../../../assets/images/ico/greddy.png'
import Apb from './../../../../assets/images/ico/apb.png'
import Adb from './../../../../assets/images/ico/adb.png'

const partnersLogo = [
    {
        imageSrc: BfgV1
    },
    {
        imageSrc: Apollo
    },
    {
        imageSrc: CooperTires
    },
    {
        imageSrc: TriAce
    },
    {
        imageSrc: VenomPower
    },
    {
        imageSrc: Maxxis
    },
    {
        imageSrc: Patriot
    },
    {
        imageSrc: Michelin
    },
    {
        imageSrc: Arivo
    },
    {
        imageSrc: Fuel
    },
    {
        imageSrc: Profender
    },
    {
        imageSrc: Tjm
    },
    {
        imageSrc: Dobinson
    },
    {
        imageSrc: KingOffRoad
    },
    {
        imageSrc: OldManEmu
    },
    {
        imageSrc: Ohlins
    },
    {
        imageSrc: KingSprings
    },
    {
        imageSrc: Teraflex
    },
    {
        imageSrc: SuperPro
    },
    {
        imageSrc: BodyArmor
    },
    {
        imageSrc: ComeUpWinch
    },
    {
        imageSrc: Factor
    },
    {
        imageSrc: Warn
    },
    {
        imageSrc: Recaro
    },
    {
        imageSrc: Whelen
    },
    {
        imageSrc: Saber
    },
    {
        imageSrc: WaterPort
    },
    {
        imageSrc: SmartCap
    },
    {
        imageSrc: FrontRunner
    },
    {
        imageSrc: Arb
    },
    {
        imageSrc: RoughCountry
    },
    {
        imageSrc: Hamer
    },
    {
        imageSrc: NikomOpen
    },
    {
        imageSrc: Option
    },
    {
        imageSrc: Mcc
    },
    {
        imageSrc: Borla
    },
    {
        imageSrc: Radius
    },
    {
        imageSrc: Greddy
    },
    {
        imageSrc: Apb
    },
    {
        imageSrc: Adb
    },
];



function services() {
  return (
    <>
        <div className="container-fluid services_home_section">
            <div className="services-row-div row m-0">
                <div className='srvcs-span-div col-12 m-0 d-flex justify-content-center align-items-center'>
                    <span className='border border-white p-3'>
                        <strong className='text-white'>OFF-ROAD VEHICLE CUSTOMIZATION</strong>
                    </span>
                </div>
                <div className='services-carousel-div col-12 m-0'>
                    <SwiperCarousel />
                </div>
                <div className='col-12 m-0 p-3 d-flex justify-content-center align-items-center text-center'>
                    <p className='services-p mt-5'>We modify vehicles for off-road adventures, equipping them with essential upgrades such as lift kits, skid plates, winches, and lighting solutions to enhance durability and capability.</p>
                </div>
                <div className='col-12 m-0 d-flex justify-content-center align-items-center'>
                    <RedRouteBtn
                        BtnClassName="services-book-btn sp-wide fw-bold "
                        RouterLink="/"
                        BtnTittle="BOOK NOW!"
                    />
                </div>
            </div>
        </div>
        <div className="container-fluid services_content_section">
            <div className='row m-0 p-0'>
                <div className='col-12 m-0 p-1'>
                    <div className="d-flex flex-row flex-wrap mb-3">

                    {partnersLogo.map((logo, index) => (
                        <div key={index} className="p-2 m-2">
                            <img className="partners-logo" src={logo.imageSrc} alt={`Logo ${index + 1}`} />
                        </div>
                    ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default services