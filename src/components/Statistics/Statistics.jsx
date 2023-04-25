import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(stat => (
                    <li className="item" key={stat.id}>
                        <span className="label">{ stat.label}</span>
                        <span className="percentage">{ stat.percentage }</span>
                    </li>
                ))}
            
            </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
      }),
    )
}
 