import pandas as pd

N_CLASSES = 5

# read occupancy data
od = pd.read_csv("data.json", parse_dates=[0])

od = od[od.capacity > 0]
od.occupancy = od.occupancy / od.capacity
od.time.dt.round('1h', inplace=True)
od['week_day'] = od.time.dt.weekday
od['hour'] = od.time.dt.hour

od.drop('capacity', 1, inplace=True)

# read and clean weather data
wd = pd.read_json("weather.json")
wd.time = pd.to_datetime(wd.time, unit='s')
wd.interpolate(limit_direction='both', inplace=True)

del_columns = ['icon', 'precipType', 'summary']
wd.drop(del_columns, 1, inplace=True)

# merge datasets
df = od.merge(wd, how='left', left_on='time', right_on='time', left_index=True)
df.reset_index(inplace=True)
df['class'] = (df.occupancy * N_CLASSES).round().astype('int')
df.dropna(inplace=True)
