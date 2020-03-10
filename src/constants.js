/* global google */
export const API_ROOT = 'http://18.188.86.138:8080/delivery-backend';
export const TOKEN_KEY = 'TOKEN';
export const GOOGLE_API_KEY = 'AIzaSyCQd2_s804T25-Xtvm5PndruimLb6pEuY4';
export const GOOGLE_MAP_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQd2_s804T25-Xtvm5PndruimLb6pEuY4&v=3.exp&libraries=geometry,drawing,places';
export const NE = new google.maps.LatLng(37.833785, -122.354839);
export const SW = new google.maps.LatLng(37.708039, -122.515274);
export const BOUNDS = new google.maps.LatLngBounds(SW, NE);
export const CENTER = new google.maps.LatLng(37.7749, -122.4194);
