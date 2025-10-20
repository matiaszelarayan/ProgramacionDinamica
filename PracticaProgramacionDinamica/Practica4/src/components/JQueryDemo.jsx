import { useEffect } from 'react';
import $ from 'jquery';

export default function JQueryDemo() {
  useEffect(() => {
    // ejemplo simple: cambiar texto al hacer click
    $('#jq-btn').on('click', () => {
      $('#jq-box').text('Clic desde jQuery!').css('background', '#74b9ff');
    });
    return () => {
      $('#jq-btn').off('click');
    };
  }, []);

  return (
    <div>
      <h3>jQuery demo</h3>
      <div id="jq-box" style={{ padding: 10, background: '#ffeaa7' }}>Caja jQuery</div>
      <button id="jq-btn" style={{ marginTop: 8 }}>Acción jQuery</button>
    </div>
  );
}
