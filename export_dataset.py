def transform(df, ypred):
    out = {}
    g = df.groupby(['time', 'floor', 'zone'])
    for (t, f, z), i in g.groups.items():
        T = int(t.to_pydatetime().timestamp())
        out[T] = out.get(T, {})
        out[T][f] = out[T].get(f, {})
        out[T][f][z] = ypred[i].iloc[0]

    return out
