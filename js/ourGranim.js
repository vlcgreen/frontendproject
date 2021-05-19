var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    //stateTransitionSpeed:10,
    states : {
        "default-state": {
            gradients: [
                // ['#ff7b00','#ff8800' ],
                // ['#ff9500', '#ffa200'],
                // ['#ffaa00', '#ffaa00'],
                // ['#ffc300', '#ffd000'],
                // ['#ffdd00', '#ffea00'],
                ['#0E273C', '#00F5DA'],
                ['#F15BB5', '#FEE440'],
                ['#FEE440', '#0E273C'],
                ['#0E273C', '#00F5DA'],
                ['#F15BB5', '#FEE440'],
                ['#FEE440', '#0E273C'],
            ]
        }
    }
});