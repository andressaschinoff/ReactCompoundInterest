import React from 'react';

export default function Interests({
  monthlyInterests,
  initialValue,
  currentBalance,
}) {
  return (
    <div style={styles.container}>
      {monthlyInterests.map(
        ({ id, monthlyBalance, monthlyInterest, monthlyRate }) => {
          const classPercentage =
            currentBalance > initialValue
              ? styles.goodPercentage
              : styles.badPercentage;
          const classInterests =
            currentBalance > initialValue
              ? styles.goodInterest
              : styles.badInterest;
          return (
            <div key={id} style={styles.flexRow}>
              <div>
                <span style={styles.idStyle}>{id}</span>
              </div>
              <div style={styles.flexColumn}>
                <span style={classInterests}>{monthlyBalance}</span>
                <span style={classInterests}>{monthlyInterest}</span>
                <span style={classPercentage}>{monthlyRate}</span>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '20px',
  },

  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  idStyle: {
    fontSize: '1.2rem',
    marginRight: '10px',
  },

  goodInterest: {
    fontSize: '1.1rem',
    color: 'green',
  },

  badInterest: {
    fontSize: '1.1rem',
    color: 'red',
  },

  goodPercentage: {
    fontSize: '1.1rem',
    color: 'blue',
  },

  badPercentage: {
    fontSize: '1.1rem',
    color: 'orange',
  },
};
