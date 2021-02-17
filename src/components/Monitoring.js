const Monitoring = () => {
    const stories = storiesof('Line', module)


    stories.add('area gradients', () => (
        <Line
            {...commonProperties}
            enableArea={true}
            yScale={{
                type: 'linear',
                stacked: true,
            }}
            curve={select('curve', curveOptions, 'linear')}
            defs={[
                linearGradientDef('gradientA', [
                    { offset: 0, color: 'inherit' },
                    { offset: 100, color: 'inherit', opacity: 0 },
                ]),
            ]}
            fill={[{ match: '*', id: 'gradientA' }]}
        />
    ))


    return (
        <div>총 용량</div>

    )
}

export default Monitoring;