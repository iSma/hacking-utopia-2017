from datetime import datetime, timedelta, timezone
import json, time, sys
import requests
from requests.exceptions import SSLError, HTTPError
import forecastio

api_key = 'd53bc5c23c3c2df51a380a45650ea4a2'

r = requests.get('https://hack.lct.ee/api/v1/buildings', cookies={'JSESSIONID': 'node086aw7vuszro95mgs0eg605fq197.node0'})
assert r.status_code == 200

buildings = r.json()['buildings']
espace_post = next(b for b in buildings if b['id']==6)

from_time = datetime(2015, 12, 31, tzinfo=timezone.utc)
to_time = datetime(2017, 11, 1, tzinfo=timezone.utc)

def load_forecast_range(from_time, to_time):
    while from_time < to_time:
        while True:
            try:
                forecast = forecastio.load_forecast(api_key, espace_post['latitude'], espace_post['longitude'], time=from_time, units='si')
                break
            except (SSLError, HTTPError) as e:
                print(e, file=sys.stderr)
                continue

        by_hour = forecast.hourly()
        for data_point in by_hour.data:
            yield data_point
        from_time += timedelta(days=1)

forecast_data = [dp.d for dp in load_forecast_range(from_time, to_time)]
print(json.dumps(forecast_data))
