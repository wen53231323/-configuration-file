setInterval(() => {
			let create_time = Math.round(new Date('2022-03-18 00:00:00').getTime() / 1000);
			let timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
			let second = timestamp - create_time;
			let time = new Array(0, 0, 0, 0, 0);
				   
			if (second >= 365 * 24 * 3600) {
				time[0] = parseInt(second / (365 * 24 * 3600));
				second %= 365 * 24 * 3600;
			}
			if (second >= 24 * 3600) {
				time[1] = parseInt(second / (24 * 3600));
				second %= 24 * 3600;
			}
			if (second >= 3600) {
					time[2] = parseInt(second / 3600);
				second %= 3600;
			}
			if (second >= 60) {
					time[3] = parseInt(second / 60);
				second %= 60;
			}
			if (second > 0) {
					time[4] = second;
			} 
			currentTimeHtml = '小破站已运行 ' + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' 时 ' + time[3] + ' 分 ' + time[4] + ' 秒'; 
			document.getElementById("running-time").innerHTML = currentTimeHtml			
			}, 1000);