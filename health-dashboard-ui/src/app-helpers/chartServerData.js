import { ref } from 'vue';
import { useState } from '@/app-store/index';

export function getChartData(initialValue) {
  const chartdata = ref(initialValue);

  const state = useState();

  async function setChartData() {
    //console.log(state.email);
    state.screenLock = true;
    state.showSpinner = true;
    ///if(state.email==='demo@demo.com' && state.password ==='demo'){

    chartdata.value = {
      type: 'line',
      data: {
        labels: [
          'Mercury',
          'Venus',
          'Earth',
          'Mars',
          'Jupiter',
          'Saturn',
          'Uranus',
          'Neptune',
        ],
        datasets: [
          {
            label: 'Number of Moons',
            data: [0, 0, 1, 2, 79, 82, 27, 14],
            backgroundColor: 'rgba(54,73,93,.5)',
            borderColor: '#36495d',
            borderWidth: 3,
          },
          {
            label: 'Planetary Mass (relative to the Sun x 10^-6)',
            data: [
              0.166,
              2.081,
              3.003,
              0.323,
              954.792,
              285.886,
              43.662,
              51.514,
            ],
            backgroundColor: 'rgba(71, 183,132,.5)',
            borderColor: '#47b784',
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        lineTension: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                padding: 25,
              },
            },
          ],
        },
      },
    };

    console.log(' I came here to check');

    await new Promise((resolve) => setTimeout(resolve, 2000));
    state.screenLock = false;
    state.showSpinner = false;
  }

  async function fetchData() {
    console.log('calling fecth data');
    return new Promise(async (resolve) => {
      // const res = await fetch(
      //   `https://disease.sh/v3/covid-19/countries/?yesterday=true&strict=true`
      // );

      const data = {
        type: 'line',
        data: {
          labels: [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune',
          ],
          datasets: [
            {
              label: 'Number of Moons',
              data: [0, 0, 1, 2, 79, 82, 27, 14],
              backgroundColor: 'rgba(54,73,93,.5)',
              borderColor: '#36495d',
              borderWidth: 3,
            },
            {
              label: 'Planetary Mass (relative to the Sun x 10^-6)',
              data: [
                0.166,
                2.081,
                3.003,
                0.323,
                954.792,
                285.886,
                43.662,
                51.514,
              ],
              backgroundColor: 'rgba(71, 183,132,.5)',
              borderColor: '#47b784',
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      };

      console.log('calling fecth data return s' + data);
      setTimeout(async () => resolve(data), 2000);
    });
  }

  // console.log('chartdata' + JSON.stringify(chartdata));
  return {
    chartdata,
    fetchData,
    setChartData,
  };
}
