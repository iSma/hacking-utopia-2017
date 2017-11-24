import requests
import forecastio

api_key = '06421571d3b9361a30e88814ce8eb5c9'

r = requests.get('https://hack.lct.ee/api/v1/buildings', cookies={'JSESSIONID': 'node086aw7vuszro95mgs0eg605fq197.node0'})
assert r.status_code == 200

buildings = r.json()['buildings']
espace_post = next(b for b in buildings if b['id']==6)
#print(espace_post)

forecast = forecastio.load_forecast(api_key, espace_post['latitude'], espace_post['longitude'], units='si')
by_hour = forecast.hourly()
print(vars(by_hour.data[0]))
for data_point in by_hour.data:
    pass
