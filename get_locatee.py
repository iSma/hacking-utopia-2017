import requests
import json
import pandas as pd


def fetch(username, password):
    URL = 'https://hack.lct.ee'
    session = requests.session()
    session.post(URL + '/dologin',
                 dict(username=username, password=password))

    floors = session.get(URL + '/api/v1/buildings/6/floors')
    floors = json.loads(floors.text)
    floors = floors['floors']

    all = []
    for f in floors:
        print("floor={floor}".format(floor=f['level']))
        for zone in [1, 2, 3, 4, 5, 6, 7, 8]:
            print("zone={zone}".format(zone=zone))
            url = (URL + "/api/v1/stats?" +
                   "fn=sum&of=desks.occupied&by=hour" +
                   "&locationFilter.floor={id}" +
                   "&locationFilter.attribute.zone={zone}" +
                   "&timeFilter.start=2016-01-01T00:00:00" +
                   "&timeFilter.end=2017-11-01T00:00:00")

            url = url.format(id=f['id'], zone=zone)
            data = session.get(url)
            data = json.loads(data.text)
            data = data['stats']

            url = (URL + "/api/v1/stats?" +
                   "fn=count&of=desks" +
                   "&locationFilter.floor={id}" +
                   "&locationFilter.attribute.zone={zone}" +
                   "&timeFilter.at=2017-01-01T00:00:00")

            url = url.format(id=f['id'], zone=zone)
            cap = session.get(url)
            cap = json.loads(cap.text)
            cap = cap['stats']
            cap = cap[0]['value'] if cap else 0

            all += [{'time': d['dateTime'],
                     'zone': zone,
                     'occupancy': d['value'],
                     'floor': f['level'],
                     'capacity': cap}
                    for d in data]

    return all


if __name__ == '__main__':
    import sys

    if len(sys.argv) < 4:
        print("Usage: {prog} PATH USERNAME PASSWORD".format(prog=sys.argv[0]))
        exit(-1)

    path, username, password = sys.argv[1:]
    data = fetch(username, password)
    data = pd.DataFrame(data)
    data = data.sort_values(by='time')
    data = data[['time', 'floor', 'zone', 'occupancy', 'capacity']]

    data.to_csv(path, index=False)
