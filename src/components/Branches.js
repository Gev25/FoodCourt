import React, {useEffect} from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {getBranchesRequest} from "../store/actions/branches";

export default function Branches() {
    const dispatch = useDispatch();
    const branches = useSelector(state => state.branches.branches);

    useEffect(() => {
        dispatch(getBranchesRequest());
    }, []);

    return (
        <div className='map__container'>
            {
                branches.length ? (
                    <YMaps query={{
                        ns: 'use-load-option',
                        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
                    }}>
                        <Map
                            width="140rem"
                            height="50rem"
                            defaultState={{
                                center: [40.786543, 43.838250],
                                zoom: 16,
                            }}>
                            {
                                branches.map(branch => (
                                    <Placemark
                                        key={branch.id}
                                        defaultGeometry={[branch.lat, branch.lon]}
                                        properties={{
                                            balloonContentBody: `<a href="https://codesandbox.io/s/7pzzzf?file=/src/App.js:5575-5676" >${branch.title}</a>`,
                                        }}
                                        options={{
                                            preset: 'islands#geolocationIcon',
                                            iconColor: 'red',
                                        }}
                                    />
                                ))
                            }
                        </Map>
                    </YMaps>
                ) : null
            }
        </div>
    );
}
