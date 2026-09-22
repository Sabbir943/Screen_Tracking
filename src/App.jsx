import { useState } from 'react';
import { ORDER_STATES, STAGES } from './mock/orderData';
import OrderHeader from './components/tracking/OrderHeader';
import StatusHeroCard from './components/tracking/StatusHeroCard';
import TrackingTimeline from './components/tracking/TrackingTimeline';
import TrackingMapCard from './components/tracking/TrackingMapCard';
import OrderItemsSummary from './components/tracking/OrderItemsSummary';
import SupportActionCard from './components/tracking/SupportActionCard';
import IssueReportModal from './components/tracking/IssueReportModal';

export default function App() {
  const [selectedStateKey, setSelectedStateKey] = useState('NORMAL_IN_TRANSIT');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('NOT_RECEIVED');

  const order = ORDER_STATES[selectedStateKey];
  const statusIdx = STAGES.indexOf(order.status);
  const stageIdx = statusIdx === -1 ? 0 : statusIdx;

  const openModal = (mode) => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-12 font-sans text-slate-800 shadow-2xl">
      <OrderHeader
        orderId={order.id}
        selectedStateKey={selectedStateKey}
        onSelectState={setSelectedStateKey}
      />

      <main className="space-y-4 p-4">
        <StatusHeroCard order={order} stageIdx={stageIdx} />
        <TrackingMapCard order={order} />

        {order.trackingAvailable && <TrackingTimeline events={order.timeline} />}

        <SupportActionCard
          order={order}
          onReportIssue={() => openModal('NOT_RECEIVED')}
          onInquireDelay={() => openModal('DELAYED')}
        />

        <OrderItemsSummary items={order.items} summary={order.summary} />
      </main>

      <IssueReportModal
        open={modalOpen}
        mode={modalMode}
        order={order}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}