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

forecast = forecastio.load_forecast(api_key, espace_post['latitude'], espace_post['longitude'], units='si')
by_hour = forecast.hourly()

forecast_data = [dp.d for dp in by_hour.data]
print(json.dumps(forecast_data))
