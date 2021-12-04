import React from 'react'
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

export default function DonuTypes (props) {

    const config = {
        type: 'line',
        data: 2,
        options: {}
      };

    return(
        <div>
            <canvas id="myChart"></canvas>
        </div>
    );
}