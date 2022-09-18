
// Instructions to use mappable objects for the addMarkers method.
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(public mapId: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapId) as HTMLElement, {
            zoom: 18,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarkers(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }
}