import React from 'react'
import {Map, Marker, Popup, TileLayer, Polyline, Circle, Tooltip, ZoomControl, Path} from 'react-leaflet'
import Kathmandu from '../../assets/images/kathmandu.jpeg'

const DEFAULT_VIEWPORT = {
    center: [28.3949, 84.1240],
    zoom: 7,
};