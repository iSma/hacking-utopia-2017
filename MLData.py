#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Nov 24 20:45:18 2017

@author: michaelpapinutto
"""

from sklearn import datasets
from sklearn.neural_network import MLPRegressor
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os



path = os.path.dirname(os.path.realpath(__file__))

os.chdir(path)

temp = pd.read_csv(path+'/weather.json', parse_dates=[0])

#
##data.to_csv(path, index=False)
##data=fetch('michael.papinutto','ZRQrtbu349rbw')
#data = pd.DataFrame(data)
#data = data.sort_values(by='time')
#data = data[['time', 'floor', 'zone', 'occupancy', 'capacity']]
#
#
#X=df_Comfort.iloc[:,[18,19,20,21]]
#y=df_Comfort['TempLin_High']
#
##
#X_train=X[0:int(len(X)*.75)]
#y_train=y[0:int(len(y)*.75)]
##
#X_test=X[int(len(X)*.75):]
#y_test=y[int(len(y)*.75):]
#
#
#clf = MLPRegressor( solver='lbfgs', activation='identity', alpha=1e-5,hidden_layer_sizes=(50, 50, 10), random_state=0)
#clf.fit(X_train, y_train)
#
#yhat=clf.predict(X_test)
#
#plt.plot(np.array(y_train.append(pd.DataFrame(yhat))))
#plt.plot(np.array(y_train.append(y_test)),'r')
#
#print(clf.score(X_train, y_train))

