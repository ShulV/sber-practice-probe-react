import React from 'react'

const styles = {
    div1: {
        left: '38px',
        top:'38px',
        animationDelay: '0s',
    },
    div2: {
        left: '80px',
        top:'38px',
        animationDelay: '0.125s',
    },
    div3: {
        left: '122px',
        top:'38px',
        animationDelay: '0.25s',
    },
    div4: {
        left: '38px',
        top:'80px',
        animationDelay: '0.875s',
    },
    div5: {
        left: '122px',
        top:'80px',
        animationDelay: '0.375s',
    },
    div6: {
        left: '38px',
        top:'122px',
        animationDelay: '0.75s',
    },
    div7: {
        left: '80px',
        top:'122px',
        animationDelay: '0.625s',
    },
    div8: {
        left: '122px',
        top:'122px',
        animationDelay: '0.5s',
    }

}

export default function Loader() {
    return (
        <div class="loadingio-spinner-blocks-zpgajdsxv9b">
            <div class="ldio-l7vihtcccgi">
                <div style={styles.div1}></div>
                <div style={styles.div2}></div>
                <div style={styles.div3}></div>
                <div style={styles.div4}></div>
                <div style={styles.div5}></div>
                <div style={styles.div6}></div>
                <div style={styles.div7}></div>
                <div style={styles.div8}></div>
            </div>
        </div>
    )

}