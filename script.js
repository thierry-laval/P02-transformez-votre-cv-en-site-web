document.addEventListener('DOMContentLoaded', () => {
    // Gestion des boutons toggle (Accordéons fluides)
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-toggle');
            const target = document.getElementById(targetId);
            
            const isExpanded = target.classList.toggle('expanded');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });

    // Filtre des pays visités par région
    document.querySelectorAll('.travel-filters button').forEach(btn => {
        btn.addEventListener('click', function() {
            // Style actif sur les boutons
            this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const region = this.getAttribute('data-region');
            const items = document.querySelectorAll('.travel-list label');

            items.forEach(item => {
                if (region === 'all' || item.dataset.continent === region) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Ergonomie Google Maps
    const mapContainer = document.querySelector('.map-responsive');
    if (mapContainer) {
        mapContainer.addEventListener('click', () => {
            mapContainer.classList.add('active');
        });
    }

    // --- PROTECTION SCOLAIRE (Gardée telle quelle) ---
    document.onselectstart = () => false;
    document.oncontextmenu = () => false;
    
    if (window.sidebar) {
        document.onmousedown = () => false;
        document.onclick = () => true;
    }
});