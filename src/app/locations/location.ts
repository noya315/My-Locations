export class Location {
    constructor(public name: string = '', public address: string = '',
                public category: string = '', public position?: google.maps.LatLngLiteral) {
        if (!position) {
            navigator.geolocation.getCurrentPosition((currentPosition) => {
                this.position = {
                    lat: currentPosition.coords.latitude,
                    lng: currentPosition.coords.longitude
                };
            });
        }
    }
}
