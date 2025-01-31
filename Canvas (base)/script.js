class BarChart {
    constructor(canvasId, config) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Canvas no encontrado');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.config = config;
        this.drawChart();
    }

    drawChart() {
        const { labels, data, colors, width, height } = this.config;
        this.canvas.width = width;
        this.canvas.height = height;
        const ctx = this.ctx;
        
        const maxData = Math.max(...data);
        const barWidth = width / data.length - 10;
        const scale = height / maxData;
        
        ctx.clearRect(0, 0, width, height);
        
        data.forEach((value, index) => {
            const barHeight = value * scale;
            const x = index * (barWidth + 10);
            const y = height - barHeight;
            
            ctx.fillStyle = colors[index] || 'blue';
            ctx.fillRect(x, y, barWidth, barHeight);
            
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText(labels[index], x + barWidth / 2, height - 5);
        });
    }
}

// Uso del componente
const config = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    data: [10, 20, 15, 30, 25],
    colors: ['red', 'green', 'blue', 'orange', 'purple'],
    width: 500,
    height: 300
};

window.onload = () => {
    new BarChart('myCanvas', config);
};
