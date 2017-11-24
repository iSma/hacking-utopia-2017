
# coding: utf-8

# In[255]:


import os
import pandas as pd
import numpy as np 


# In[256]:


n_classes = 5


# In[257]:


# Get and clean occupancy data

od=pd.read_csv("data.json", parse_dates=[0])

od = od[od.capacity > 0]
od["occupancy_percent"] = od.occupancy / od.capacity

od["week_day"] = od.time.dt.weekday
od["hour"] = od.time.dt.hour

del_columns = ['occupancy', 'capacity']
od.drop(del_columns, 1, inplace=True)


# In[258]:


# read an clean weather data

wd=pd.read_json("weather.json")
wd['date'] = pd.to_datetime(wd['time'], unit='s')
wd.interpolate(limit_direction="both", inplace=True)

del_columns = ['icon', 'precipType', 'summary', 'time']
wd.drop(del_columns, 1, inplace=True)


# In[259]:


# merge datasets

mixed = od.merge(wd,how='left', left_on='time', right_on='date', left_index=True)
mixed.drop('time', 1, inplace=True)
mixed.reset_index(inplace=True)
classes = mixed.occupancy_percent * n_classes
classes = classes.round().astype('int')
mixed.drop('occupancy_percent', 1, inplace=True)


# In[260]:




