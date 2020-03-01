window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 300,
        connectParticles: true,
        color: '#adabab',
        minDistance: 80,
        sizeVariations: 4,
        //responsive
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                    sizeVariations: 4,
                }
            }
        ]
    });
}