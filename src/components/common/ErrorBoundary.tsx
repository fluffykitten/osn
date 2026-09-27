import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, X } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  modalName?: string;
  onClose?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // If it's a modal error boundary
      if (this.props.modalName) {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs select-none">
            <div className="bg-[#FFFFF0] border-2 border-[#D4A359] rounded-2xl max-w-md w-full p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1]">
                <div className="flex items-center gap-2 text-[#2D3748]">
                  <AlertTriangle className="w-5 h-5 text-[#D4A359]" />
                  <h3 className="font-bold text-sm font-display">
                    {this.props.modalName} Mengalami Kendala
                  </h3>
                </div>
                {this.props.onClose && (
                  <button
                    type="button"
                    onClick={this.handleReset}
                    className="p-1 text-[#708090] hover:text-[#2D3748] rounded-lg cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="text-xs text-[#4A5867] leading-relaxed">
                Terjadi kesalahan teknis saat membuka popup ini. Lembar kerja Anda tetap aman dan tidak terpengaruh.
              </div>

              {this.state.error?.message && (
                <div className="p-2.5 bg-[#F0F8FF] border border-[#B0C4DE] rounded-xl text-[11px] font-mono text-[#2D3748] break-words">
                  {this.state.error.message}
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={this.handleReset}
                  className="px-3 py-1.5 bg-[#708090] hover:bg-[#5D6D7D] text-[#FFFFF0] text-xs font-bold rounded-lg cursor-pointer transition shadow-2xs"
                >
                  Tutup Pop-up
                </button>
              </div>
            </div>
          </div>
        );
      }

      // General fallback UI
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-14 h-14 rounded-2xl bg-[#F0F8FF] border border-[#B0C4DE] flex items-center justify-center text-[#D4A359] mb-4 shadow-sm">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h2 className="text-base font-bold text-[#2D3748] font-display mb-1">
            Terjadi Kendala Tampilan
          </h2>
          <p className="text-xs text-[#708090] max-w-md mb-4 leading-relaxed">
            Halaman mengalami kesalahan render sesaat. Silakan muat ulang atau coba kembali.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2D3748] hover:bg-[#1E293B] text-[#FFFFF0] text-xs font-bold rounded-xl shadow-md cursor-pointer transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Muat Ulang Halaman</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
